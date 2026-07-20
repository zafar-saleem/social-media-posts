import { TypeItem } from "../../types";
import { Item } from "../Item";

export const ItemListContainer = ({ notes }: any) => {
  return (
    <>{notes.default.map((item: TypeItem) => ( <Item {...item} key={item.id} />))}</>
  )
}
