import { AppBar, styled } from "@mui/material";

const NavbBar = styled(AppBar)(({ theme }) => ({
  background: "green",
  padding: 1, //1px
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    background: "red",
    flexDirection: "column",
  },
}));
const App = () => {
  return (
    <div>
      <NavbBar sx={{ padding: 1 }}>
        {" "}
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item}>{item}</div>
        ))}
      </NavbBar>
    </div>
  );
};

export default App;
