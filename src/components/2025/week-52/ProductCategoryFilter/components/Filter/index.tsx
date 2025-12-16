import { ProductsList, useProductCategory } from "../../store";
import styles from "./styles.module.css";
import { sortBasedOnPrice } from "./utils";

export const Filter = ({ products }: any) => {
  const setData = useProductCategory((state) => state.setData);

  const selectFilter = (event: any, omitString:string) => {
    const str = omitString.toLowerCase();

    if (event.target.value !== omitString)
      return setData(ProductsList.filter((product: any) => {
        return product[str] === event.target.value;
      }));

    return setData(ProductsList);
  }

  const sortProducts = (event: any) => {
    setData([...sortBasedOnPrice({
      value: event.target.value,
      list: ProductsList,
      products,
    })]);
  }

  return (
    <section
      className={styles.filter_container}
    >
      <select
        className={styles.filter_size}

        onChange={(event) => {
          selectFilter(event, "Size");
        }}
      >
        <option>Size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="xlarge">X-Large</option>
        <option value="xxlarge">XX-Large</option>
      </select>
      
      <select
        className={styles.filter_category}

        onChange={(event) => {
          selectFilter(event, "Category");
        }}
      >
        <option>Category</option>
        <option value="fashion">Fashion</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="denim">Denim</option>
        <option value="dress">Dress</option>
      </select>
      
      <select
        className={styles.filter_sort}
        onChange={sortProducts}
      >
        <option>Sort</option>
        <option value="highprice">High Price</option>
        <option value="lowprice">Low Price</option>
      </select>
    </section>
  )
}
