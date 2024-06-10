import styles from './MyComp.module.css'
  function MyComp() {
    return (
      <>
         <div className={styles.bodyText}>Using CSS Modules (component.module.css).
         
         <h2>this is todo list </h2>
            
            <input type="checkbox" />
            <label> eat Big Mac</label>
  
            <input type="checkbox" />
            <label> drink Coke </label></div>
      </>
    )
  }


export default MyComp;