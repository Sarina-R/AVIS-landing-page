'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface DraggableItemProps {
  id: string
  content: React.ReactNode
}

interface DraggableListProps {
  items: DraggableItemProps[]
  onChange?: (items: DraggableItemProps[]) => void
  className?: string
}

function DraggableItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className='text-red-500'>≡</div>
      {children}
    </div>
  )
}

function DraggableList({
  items: initialItems,
  onChange,
  className,
}: DraggableListProps) {
  const [items, setItems] = useState(initialItems)
  const [draggedItem, setDraggedItem] = useState<DraggableItemProps | null>(
    null
  )
  const [dragOverItemId, setDragOverItemId] = useState<string | null>(null)

  const handleDragStart = (item: DraggableItemProps) => setDraggedItem(item)
  const handleDragOver = (e: React.DragEvent, itemId: string) => {
    e.preventDefault()
    setDragOverItemId(itemId)
  }
  const handleDragEnd = () => {
    if (!draggedItem || !dragOverItemId) {
      setDraggedItem(null)
      setDragOverItemId(null)
      return
    }
    const newItems = [...items]
    const draggedIndex = items.findIndex((item) => item.id === draggedItem.id)
    newItems.splice(draggedIndex, 1)
    // NewItems.splice(dropIndex, 0, draggedItem)
    setItems(newItems)
    onChange?.(newItems)
    setDraggedItem(null)
    setDragOverItemId(null)
  }

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            draggable
            onDragStart={() => handleDragStart(item)}
            onDragOver={(e) => handleDragOver(e, item.id)}
            onDragEnd={handleDragEnd}
            className={cn(
              'cursor-grab rounded-lg border bg-black/50 border-red-600/20 p-4',
              dragOverItemId === item.id &&
                'border-2 border-red-500 bg-black/40',
              draggedItem?.id === item.id &&
                'border-2 border-gray-400 opacity-50'
            )}
          >
            <DraggableItem>{item.content}</DraggableItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default function DraggableListSection({
  items,
  onChange,
}: DraggableListProps) {
  return (
    <section className='py-24 px-4 bg-black'>
      <div className='container mx-auto max-w-4xl'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-4xl md:text-5xl font-light mb-4'>Our Services</h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Drag and reorder our services to see what interests you most.
          </p>
        </motion.div>
        <div className='flex justify-center'>
          <DraggableList
            items={items}
            onChange={onChange}
            className='max-w-md w-full'
          />
        </div>
      </div>
    </section>
  )
}
