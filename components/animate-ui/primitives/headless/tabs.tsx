"use client"

import * as React from "react"
import { motion, type Transition } from "motion/react"
import {
  TabGroup as TabGroupPrimitive,
  TabList as TabListPrimitive,
  Tab as TabPrimitive,
  TabPanels as TabPanelsPrimitive,
  TabPanel as TabPanelPrimitive,
  type TabGroupProps as TabGroupPrimitiveProps,
  type TabListProps as TabListPrimitiveProps,
  type TabProps as TabPrimitiveProps,
  type TabPanelsProps as TabPanelsPrimitiveProps,
  type TabPanelProps as TabPanelPrimitiveProps,
} from "@headlessui/react"

import {
  Highlight,
  HighlightItem,
  type HighlightItemProps,
  type HighlightProps,
} from "@/components/animate-ui/primitives/effects/highlight"
import { getStrictContext } from "@/lib/get-strict-context"

type TabsContextType = {
  selectedIndex: number
}

const [TabsProvider, useTabs] = getStrictContext<TabsContextType>("TabsContext")

type TabGroupProps<TTag extends React.ElementType = "div"> =
  TabGroupPrimitiveProps<TTag> & {
    as?: TTag
    className?: string
  }

function TabGroup<TTag extends React.ElementType = "div">({
  children,
  ...props
}: TabGroupProps<TTag>) {
  return (
    <TabGroupPrimitive data-slot="tab-group" {...props}>
      {(bag) => (
        <TabsProvider value={{ selectedIndex: bag.selectedIndex }}>
          {typeof children === "function" ? children(bag) : children}
        </TabsProvider>
      )}
    </TabGroupPrimitive>
  )
}

type TabListProps<TTag extends React.ElementType = "div"> =
  TabListPrimitiveProps<TTag> & {
    as?: TTag
    className?: string
  }

function TabList<TTag extends React.ElementType = "div">(
  props: TabListProps<TTag>
) {
  return <TabListPrimitive data-slot="tab-list" {...props} />
}

type TabHighlightProps = Omit<HighlightProps, "controlledItems" | "value">

function TabHighlight({
  transition = { type: "spring", stiffness: 200, damping: 25 },
  ...props
}: TabHighlightProps) {
  const { selectedIndex } = useTabs()

  return (
    <Highlight
      data-slot="tab-highlight"
      controlledItems
      value={selectedIndex.toString()}
      transition={transition}
      {...props}
    />
  )
}

type TabProps<TTag extends React.ElementType = "button"> = Omit<
  TabPrimitiveProps<TTag>,
  "children"
> &
  Required<Pick<TabPrimitiveProps<TTag>, "children">> & {
    index: number
    as?: TTag
    className?: string
  }

function Tab<TTag extends React.ElementType = "button">(props: TabProps<TTag>) {
  const { index, as = "button", ...rest } = props

  return (
    <TabPrimitive
      data-slot="tab"
      as={as as React.ElementType}
      index={index}
      {...rest}
    />
  )
}

type TabHighlightItemProps = HighlightItemProps & {
  index: number
}

function TabHighlightItem({ index, ...props }: TabHighlightItemProps) {
  return (
    <HighlightItem
      data-slot="tab-highlight-item"
      value={index.toString()}
      {...props}
    />
  )
}

type TabPanelsProps<TTag extends React.ElementType = "div"> =
  TabPanelsPrimitiveProps<TTag> & {
    as?: TTag
    className?: string
  }

function TabPanels<TTag extends React.ElementType = "div">(
  props: TabPanelsProps<TTag>
) {
  return <TabPanelsPrimitive data-slot="tab-panels" {...props} />
}

type TabPanelProps<TTag extends React.ElementType = typeof motion.div> = Omit<
  TabPanelPrimitiveProps<TTag>,
  "transition"
> & {
  children: React.ReactNode
  className?: string
  as?: TTag
  transition?: Transition
}

function TabPanel<TTag extends React.ElementType = typeof motion.div>(
  props: TabPanelProps<TTag>
) {
  const {
    as = motion.div,
    transition = { duration: 0.35, ease: "easeInOut" },
    ...rest
  } = props

  return (
    <TabPanelPrimitive
      data-slot="tab-panel"
      layout
      initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
      transition={transition}
      as={as as React.ElementType}
      {...rest}
    />
  )
}

export {
  TabGroup,
  TabList,
  TabPanels,
  TabHighlight,
  TabHighlightItem,
  Tab,
  TabPanel,
  type TabGroupProps,
  type TabListProps,
  type TabPanelsProps,
  type TabHighlightProps,
  type TabHighlightItemProps,
  type TabProps,
  type TabPanelProps,
}
