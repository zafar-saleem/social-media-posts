export type TypeChildren = {
  icon: string,
  label: string,
  summary: string,
}

export type TypeSubMenuProps = {
  id: number,
  menu_id: number,
  label: string,
  children: TypeChildren[],
}

export type TypeMenuProps = {
  id: number,
  label: string,
  icon: string,
  href: string,
  class?: string,
  children: TypeSubMenuProps[],
}
