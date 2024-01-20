import React from 'react'
import "./WelcomePage.css"


import { Button, Form, Input } from 'antd';



const WelcomePage = ({ setName, setRedirectToHome }) => {

    const onFinish = (values) => {
        setName(values)
        setRedirectToHome(true)
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='page'>
            <h2>Bienvenido ingresa tu nombre:</h2>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    className=''
                    // label="Nombre"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingresa tu nombre!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 15,
                    }}
                >

                    <Button id='button' type="primary" htmlType="submit">
                        Ingresar
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default WelcomePage