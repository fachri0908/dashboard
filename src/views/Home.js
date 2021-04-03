import React, {useState} from 'react';
import {Row, Col, DatePicker, Typography, Select} from 'antd'
import Item from '../components/Item'
import {MoreOutlined, ArrowDownOutlined, QuestionCircleOutlined, UpOutlined} from '@ant-design/icons'
import DashboardBox from '../components/DashboardBox'
import PageTitle from '../components/Title'
import moment from 'moment'
import BarChart from '../components/BarChart'

const {RangePicker} = DatePicker
const {Title, Text} = Typography

const Home = () => {
    const [selectedDate, setSelectedDate] = useState([moment().subtract(7, 'days'), moment().subtract(1,'days')])

    const changePeriod = (dates) =>{
        setSelectedDate(dates)
    }

    const disabledDate = (current) => {
        return current && current >= moment().subtract(1, 'days');
    }

    return (
        <div>
            <Row justify="space-between">
                <Col span={15}>
                    <PageTitle/>
                </Col>
                <Col span={7}>
                <RangePicker
                    style={{width:'100%'}}
                    size="large"
                    value={selectedDate}
                    disabledDate={disabledDate}
                    ranges={{
                        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                        'Last 7 Days': [moment().subtract(7, 'days'), moment().subtract(1,'days')],
                        'Last 30 Days': [moment().subtract(30, 'days'), moment().subtract(1,'days')],
                        'This Month': [moment().startOf('month'), moment().endOf('month')],
                        
                    }}
                    onChange={changePeriod}
                />
                </Col>
            </Row>
            <div style={{width:'100%',height:'35px', backgroundColor:'#37b04d', margin:'5px', padding:'7px'}}>
                <Row>
                    <Col span={12}>
                        <Text strong style={{color:'#fff'}}>MARKET INSIGHT</Text>
                    </Col>
                    <Col span={12} style={{textAlign:'right'}}>
                        <a href="https://www.advotics.com/"><Text style={{color:'#fff'}}><QuestionCircleOutlined /> <span style={{textDecoration:'underline'}}>Click here for help</span> <UpOutlined /></Text></a>
                    </Col>
                </Row>
            </div>
            <Row >
                <Col span={7}>
                    <DashboardBox title="Sales Turnover" extra={<MoreOutlined />}>
                        <Row>
                            <Col span={19}>
                                <Title level={4}>Rp. 3,600,000</Title>
                                <span style={{color:'red'}}> <ArrowDownOutlined />13.8% </span> last period in product sold
                            </Col>
                            <Col span={5} style={{textAlign:'center'}}>
                                <img src={process.env.PUBLIC_URL + '/turnover.svg'} width="50px" alt="component"/>
                            </Col>
                        </Row>
                    </DashboardBox>
                </Col>
            </Row>

            <Row>
                <Col span={12}>
                  <DashboardBox title="AVERAGE PURCHASE VALUE" extra={<div>
                        <Select style={{width:'150px', marginRight:'10px'}} value="Last 6 Month">
                            <Select.Option value="Last 6 Month">Last 6 Month</Select.Option>
                        </Select> 
                        <MoreOutlined />
                    </div>}>
                    <BarChart date={selectedDate}/>
                  </DashboardBox>
                </Col>
                <Col span={6}>
                  <DashboardBox  title="BEST SELLING SKU" extra={<MoreOutlined />}>
                    {
                        [0,1,2,3,4].map((el)=>(
                            <Item index={el} key={el}/>
                        ))
                    }
                  </DashboardBox>
                </Col>
                <Col span={6}>
                  <DashboardBox title="TOP COMPETITOR SKU" extra={<MoreOutlined />}>
                    {
                        [0,1,2,3,4].map((el)=>(
                            <Item index={el} key={el}/>
                        ))
                    }
                  </DashboardBox>
                </Col>
              </Row>
        </div>
    );
}

export default Home;
