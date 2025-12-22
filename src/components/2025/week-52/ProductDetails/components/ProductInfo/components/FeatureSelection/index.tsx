import styles from "./styles.module.css";

export const FeatureSelection = ({ title, data, color }) => {
  return (
    <div className={styles.product_colors}>
      <h3 className={styles.section_title}>{title}</h3>
      <div>
        {
          data.map((item, index) => (
            <label
              className={color ? styles.product_color : styles.product_size}
              key={index} style={color ? { "--product-color": item } : {}}
            >
              <input
                type="radio"
                name={color ? 'color' : 'size'}
                defaultChecked={index === 0 ? true : false}
              />
              {!color && <span>{item}</span>}
            </label>
          ))
        }
      </div>
    </div>
  )
}
