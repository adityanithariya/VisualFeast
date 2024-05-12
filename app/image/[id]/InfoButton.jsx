'use client'

import MenuButton from '@components/MenuButton'
import { Button } from '@components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@components/ui/dialog'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import { toastSuccess } from '@utils/toast'
import React, { useRef, useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { IoCalendarOutline, IoImageOutline } from 'react-icons/io5'
import { PiFloppyDiskBackBold } from 'react-icons/pi'
import { LuCalendarClock, LuFolderOpen } from 'react-icons/lu'
import { GoCopy } from 'react-icons/go'

const InfoButton = () => {
  const [open, setOpen] = useState(false)
  const handleInfo = () => {
    setOpen(true)
    console.log('Info')
  }
  const handleSave = () => {
    toastSuccess('Metadata Updated!')
    setOpen(false)
    console.log('Saved')
  }
  const dateElement = useRef(null)
  const timeElement = useRef(null)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <MenuButton Icon={AiOutlineInfoCircle} onClick={handleInfo} />
      <DialogContent className="w-full max-w-sm">
        <DialogHeader>
          <DialogTitle>Details</DialogTitle>
          <DialogDescription>
            <div className="flex items-center mt-2">
              <Label htmlFor="name" className="text-right mr-3 ml-2">
                <IoImageOutline className="size-6" />
              </Label>
              <Input id="name" value="Pedro Duarte" />
            </div>
            <div className="flex items-center mt-2">
              <Label
                onClick={() => dateElement.current.showPicker()}
                className="text-right mr-3 ml-2"
              >
                <IoCalendarOutline className="size-6" />
              </Label>
              <Input ref={dateElement} type="date" />
            </div>
            <div className="flex items-center mt-2">
              <Label
                onClick={() => timeElement.current.showPicker()}
                className="text-right mr-3 ml-2"
              >
                <LuCalendarClock className="size-6" />
              </Label>
              <Input ref={timeElement} type="time" />
            </div>
            <div className="my-2">
              <h2 className="flex items-center">
                <PiFloppyDiskBackBold className="size-6 ml-2 mr-3" />
                <div className="text-md">Size Info</div>
              </h2>
              <div className="flex gap-5 ml-11 my-1">
                <span>800 x 800</span>
                <span>139.9 KB</span>
              </div>
            </div>
            <div>
              <h2 className="flex items-center">
                <LuFolderOpen className="size-6 ml-2 mr-3" />
                <div className="text-md">File Path</div>
              </h2>
              <div className="ml-11 flex items-center justify-between">
                <Button variant="link" className="px-0">
                  avatar.jpg
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    navigator.clipboard.writeText('avatar.jpg')
                    toastSuccess('Copied to clipboard!')
                  }}
                >
                  <GoCopy className="size-5" />
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="hidden">
          <Button onClick={handleSave}>Save</Button>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default InfoButton
