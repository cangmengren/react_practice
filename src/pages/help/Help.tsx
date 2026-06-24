import { Button, Drawer } from "antd";
import { useState } from "react";

export default function Help() {

  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };
  const addForm = () => {
    setOpen(true);
  }
  return (
    <div>
      <h1>关于页面 (Help Page)</h1>
      <Button onClick={addForm}>新增表单</Button>


      <Drawer
        title="新增表单"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}