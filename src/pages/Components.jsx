import { Button } from "../components/Button/Button.jsx";

const Components = () => {

  return (
    <>
      <div style={{ display: "flex", gap: "1rem", padding: "1rem 0" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Button variant="dark" size="small">primary</Button>
          <Button variant="dark" size="small">secondary</Button>
          <Button variant="dark" size="small">ghost</Button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Button variant="dark" size="medium">primary</Button>
          <Button variant="dark" size="medium">secondary</Button>
          <Button variant="dark" size="medium">ghost</Button>
        </div>
      </div>
      <div style={{ display: "flex", gap: "1rem", background: "black", padding: "1rem 0" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Button variant="transparent" size="small">ghostDark</Button>
          <Button variant="transparent" bordered size="small">ghostDark</Button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Button variant="transparent" size="medium">ghostDark</Button>
          <Button variant="transparent" bordered size="medium">ghostDark</Button>
        </div>
      </div>;
    </>
  )
}

export { Components };
