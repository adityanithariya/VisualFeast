'use client'

import MenuButton from '@components/MenuButton'
import { Button } from '@components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@components/ui/dialog'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@components/ui/popover'
import React, { useState } from 'react'
import { IoAlbumsOutline } from 'react-icons/io5'
import { RxCaretSort } from 'react-icons/rx'
import { IoIosCheckmark } from 'react-icons/io'
import { cn } from '@utils/utils'
import clsx from 'clsx'

const AlbumButton = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const [openCombobox, setOpenCombobox] = useState(false)
  const [value, setValue] = useState('')
  const handleSave = () => {
    console.log('Saved')
  }
  const albums = [
    {
      value: 'next.js',
      label: 'Next.js',
    },
    {
      value: 'sveltekit',
      label: 'SvelteKit',
    },
    {
      value: 'nuxt.js',
      label: 'Nuxt.js',
    },
    {
      value: 'remix',
      label: 'Remix',
    },
    {
      value: 'astro',
      label: 'Astro',
    },
  ]
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <MenuButton Icon={IoAlbumsOutline} onClick={() => setOpenDialog(true)} />
      <DialogContent className="w-full max-w-xs">
        <DialogHeader>
          <DialogTitle>Album</DialogTitle>
          <DialogDescription>
            <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openCombobox}
                  className="w-full my-2"
                >
                  <span className="w-full">
                    {value
                      ? albums.find((album) => album.value === value)?.label
                      : 'Select album...'}
                  </span>
                  <RxCaretSort className="ml-4 h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search album..." className="h-9" />
                  <CommandEmpty>No album found.</CommandEmpty>
                  <CommandGroup>
                    <CommandList>
                      {albums?.map((album) => (
                        <CommandItem
                          key={album.value}
                          value={album.value}
                          onSelect={(currentValue) => {
                            setValue(currentValue === value ? '' : currentValue)
                            setOpenCombobox(false)
                          }}
                        >
                          {album.label}
                          <IoIosCheckmark
                            className={cn(
                              'ml-auto h-4 w-4',
                              value === album.value
                                ? 'opacity-100'
                                : 'opacity-0',
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandList>
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            <Button className="w-full" onClick={handleSave}>
              Save Changes
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default AlbumButton
