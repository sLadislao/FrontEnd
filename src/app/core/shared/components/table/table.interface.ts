export interface ITableConfig {
  displayedColumns: string[]
  namesColumns: string[]
  actions: IAction[]
}

export interface IAction {
  name: string,
  icon: string
}

export interface IClicked {
  item: any,
  name: string
}
