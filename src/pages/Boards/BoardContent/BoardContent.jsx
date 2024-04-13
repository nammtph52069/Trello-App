import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import {
  DndContext,
  // PointerSensor,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor
} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

function BoardContent({ board }) {
  const [orderedColumns, setOrderedColumns] = useState([])

  // yêu cầu di chuyển 10px thì mới gọi event
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  // const sensors = useSensors(pointerSensor)
  // Nên sử dụng cách này để tránh bị bug trên mobile và laptop
  const mouseSenser = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } })
  const sensors = useSensors(mouseSenser, touchSensor)

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDregEnd = (event) => {
    const { active, over } = event

    // nếu over không tồn tại thì return tránh lỗi
    if (!over) {return}

    // Nếu vị trí sau khi kéo thả khác vị trí ban đầu
    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id) // lay vi tri cu tu active
      const newIndex = orderedColumns.findIndex(c => c._id === over.id) // lay vi tri moi tu over

      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
      // console.log('dndOrderedColumns:', dndOrderedColumns);
      // console.log('dndOrderedColumnsIds:', dndOrderedColumnsIds);

      // Cập nhật lại state columns ban đầu sau khi kéo thả
      setOrderedColumns(dndOrderedColumns)
    }
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDregEnd}>
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  )
}

export default BoardContent
