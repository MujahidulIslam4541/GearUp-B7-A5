"use client"

import { Label } from "@/components/ui/label"
import {
  TabGroup,
  TabList,
  TabHighlight,
  TabHighlightItem,
  Tab,
} from "@/components/animate-ui/primitives/headless/tabs"

import type { RegisterRole } from "@/lib/validations/auth"

interface RoleToggleProps {
  role: RegisterRole
  onRoleChange: (role: RegisterRole) => void
  children?: React.ReactNode
}

export function RoleToggle({ role, onRoleChange, children }: RoleToggleProps) {
  const selectedIndex = role === "user" ? 0 : 1

  return (
    <TabGroup
      selectedIndex={selectedIndex}
      onChange={(index: number) => {
        onRoleChange(index === 0 ? "user" : "provider")
      }}
      className="w-full space-y-4"
    >
      <div className="space-y-1.5">
        <Label className="text-xs text-muted-foreground">
          I want to register as
        </Label>
        <TabHighlight
          transition={{ type: "spring", stiffness: 350, damping: 32 }}
          className="absolute inset-0 z-0 rounded-lg bg-background shadow-xs ring-1 ring-foreground/10"
        >
          <TabList className="relative inline-flex h-11 w-full items-center rounded-xl bg-muted/80 p-1 text-muted-foreground">
            <TabHighlightItem index={0} className="relative z-1 flex-1">
              <Tab
                index={0}
                className="flex h-9 w-full items-center justify-center rounded-lg text-sm font-medium transition-colors data-selected:font-semibold data-selected:text-foreground"
              >
                User
              </Tab>
            </TabHighlightItem>

            <TabHighlightItem index={1} className="relative z-1 flex-1">
              <Tab
                index={1}
                className="flex h-9 w-full items-center justify-center rounded-lg text-sm font-medium transition-colors data-selected:font-semibold data-selected:text-foreground"
              >
                Provider
              </Tab>
            </TabHighlightItem>
          </TabList>
        </TabHighlight>
      </div>

      {children}
    </TabGroup>
  )
}
