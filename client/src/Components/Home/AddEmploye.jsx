import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { toast } from "react-toastify";

function AddEmploye() {
  const { TextArea } = Input;

  const [form] = Form.useForm();
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleChange = ({ fileList }) => setImages(fileList);

  async function submit() {
    try {
      const values = form.getFieldsValue();
      const formData = new FormData();
      images.forEach((image) => formData.append("image", image.originFileObj));

      const res = await axios.post("/user/add-employe", values);
      if (res) {
        form.resetFields();
        toast.success("Data added");
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  }

  return (
    <div className="mt-8 ml-8  bg-slate-100">
      <h1 className="text-xl mb-3 font-bold ">Add Employe</h1>
      <>
        <Form
          form={form}
          onFinish={submit}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item name="name" label="">
            <TextArea placeholder="Name" cols={100} />
          </Form.Item>

          <Form.Item name="id" label="">
            <TextArea placeholder="Id" cols={100} />
          </Form.Item>

          <Form.Item name="email" label="">
            <TextArea placeholder="Email" cols={100} />
          </Form.Item>

          <Form.Item name="department" label="">
            <TextArea placeholder="Department" cols={100} />
          </Form.Item>

          <Form.Item name="address" label="">
            <TextArea placeholder="Address" cols={100} rows={5} />
          </Form.Item>

          <Form.Item name="image" label="">
            <Upload
              name="images"
              valuePropName="fileList"
              onChange={handleChange}
              multiple
              listType="picture-card"
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item label="">
            <Button htmlType="submit" className="bg-red-600">
              Add
            </Button>
          </Form.Item>
        </Form>
      </>
    </div>
  );
}

export default AddEmploye;
