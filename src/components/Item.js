import styles from "@/styles/item.module.css";

export default function Item({ item, onChange }) {
  const stylesToApply = [styles.item];
  if (item.completed) {
    stylesToApply.push(styles.completed);
  }

  const flipComplete = () => {
    const newItem = { ...item, completed: !item.completed };
    onChange(newItem);
  };

  return (
    <article className={stylesToApply.join(" ")} onClick={flipComplete}>
      <span>{item.task}</span>
      {item.important && <i className="fas fa-exclamation-circle fa-lg" />}
    </article>
  );
}
