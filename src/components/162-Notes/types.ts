type TypeTime = {
  label?: string;
  bg: string;
  text: string;
}

type TypeStatus = {
  type: string,
  label?: string,
  bg: string,
  text: string,
}

type TypeFilter = {
  task: any[],
  time: TypeTime,
  status: TypeStatus,
}

export type TypeCollaborators = {
  avatar: string,
  color: string,
  name: string,
};

export type TypeItem = {
  id: number,
  title: string,
  filter: TypeFilter,
  text: string,
  collaborators: TypeCollaborators[],
}