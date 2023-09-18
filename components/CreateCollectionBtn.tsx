'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import CreateCollectionSheet from './CreateCollectionSheet'

export default function CreateCollectionBtn() {
  const [open, setOpen] = useState(false)
  const handleOpenChange = (open: boolean) => setOpen(open)

  return (
    <div className="w-full rounded-md bg-gradient-to-r from-green-500 via-cyan-600 to-teal-500 p-[1px]">
      <Button
        variant={'outline'}
        className="dark:text-white w-full dark:bg-neutral-950 bg-white"
        onClick={() => setOpen(true)}
      >
        <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 hover:to-teal-800 bg-clip-text text-transparent">
          Create collection
        </span>
      </Button>

      <CreateCollectionSheet open={open} onOpenChange={handleOpenChange} />
    </div>
  )
}
