import React from 'react';
import {Card} from 'antd'

const DashboardBox = (props) => {
    const {title='', extra=''} = props
    return (
        <div style={{padding:5}}>
            <Card title={title} extra={extra} style={{ width: '100%' }}>
                {props.children}
            </Card>
        </div>
    );
}

export default DashboardBox;
