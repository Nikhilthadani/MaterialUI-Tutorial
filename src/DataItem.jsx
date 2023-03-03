import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
const DataItem = () => {
  const [todo, setTodo] = useState(null);
  const id = useParams().id;
  useEffect(() => {
    async function fetchTodos() {
      await fetch(`https://dummyjson.com/todos/${id}`)
        .then((res) => res.json())
        .then((data) => setTodo(data))
        .catch((err) => console.log(err));
    }
    fetchTodos();
  }, [id]);

  return todo ? (
    <Box
      padding={10}
      width={"100%"}
      display={"flex"}
      flexDirection="column"
      margin={"auto"}
    >
      <Typography variant="h4" padding={1}>
        Todo Details
      </Typography>
      <Typography>ID: {todo.id}</Typography>
      <Box display="flex" alignItems={"center"} gap={5}>
        <Typography>Task 📝: {todo.todo}</Typography>
        <IconButton color={todo.completed ? "success" : "error"}>
          {todo.completed ? <DoneAllIcon /> : <HourglassTopIcon />}
        </IconButton>
      </Box>
    </Box>
  ) : (
    <Box></Box>
  );
};

export default DataItem;
