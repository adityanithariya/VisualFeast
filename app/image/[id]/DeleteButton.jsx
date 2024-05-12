'use client'

import React, { useState } from 'react'
import MenuButton from '../../../components/MenuButton'
import { AiOutlineDelete } from 'react-icons/ai'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogCancel,
} from '@components/ui/alert-dialog'

const DeleteButton = () => {
  const [open, setOpen] = useState(false)
  const handleDelete = () => {
    console.log('Deleted')
  }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <MenuButton Icon={AiOutlineDelete} onClick={() => setOpen(true)} />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-left">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-left">
            This action cannot be undone. This will permanently delete this
            image from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteButton
