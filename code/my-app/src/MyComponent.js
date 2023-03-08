// Add module styles later...
import styles from './MyComponent.module.css';

function MyComponent() {
  
  // Apply CSS as an object
  const styleObject = {
    color: "yellow",
    backgroundColor: "blue",
    padding: "10px"
    
  }
  return (
    <div>
      <h1 className={styles.heading}>My Component</h1>
      <div style={{color: "red", backgroundColor: "cyan", padding: "5px"}}>Inline style</div>
      <div style={styleObject}>Object style</div>
      <div className={styles.bodyText}>Using CSS Modules (component.module.css).</div>
    </div>
  )
}
export default MyComponent; 