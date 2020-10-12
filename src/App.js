import React ,{ useState,useEffect }from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import moment from 'moment';

import { Layout , Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,Typography,
  Row, Col} from 'antd';


const { Title,Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;
function App() {

  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };


  const [cal1,setCal1] = useState(moment().format('YYYY-MM-DD'));
  const [cal2,setCal2] = useState(moment().format('YYYY-MM-DD'));
  const [cal3,setCal3] = useState(moment().format('YYYY-MM-DD'));
  const [cal4,setCal4] = useState(moment().format('YYYY-MM-DD'));

  const handleChangeCal1 = (v,str) => {
    setCal1(str);
  }

  const handleChangeCal2 = (v,str) => {
    setCal2(str);
  }
  const handleChangeCal3 = (v,str) => {
    setCal3(str);
  }
  const handleChangeCal4 = (v,str) => {
    setCal4(str);
  }

  const [select1,handleChangeSelect1] = useState('');
  const [select2,handleChangeSelect2] = useState('');
  const [select3,handleChangeSelect3] = useState('');
  const [select4,handleChangeSelect4] = useState('');
  const [select5,handleChangeSelect5] = useState('');
  const [select6,handleChangeSelect6] = useState('');
  const [mode,setMode] = useState('input');

  const [formData, setFormData] = useState({
    cal1:moment().format('YYYY-MM-DD'),
    cal2:moment().format('YYYY-MM-DD'),
    cal3:moment().format('YYYY-MM-DD'),
    cal4:moment().format('YYYY-MM-DD'),
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    select1: '',
    select2: '',
    select3: '',
    select4: '',
    select5: '',
    select6: '',

  });

  useEffect(()=>{

    formData.cal1 = cal1;
    formData.cal2 = cal2;
    formData.cal3 = cal3;
    formData.cal4 = cal4;

    formData.select1 = select1;
    formData.select2 = select2;
    formData.select3 = select3;
    formData.select4 = select4;
    formData.select5 = select5;
    formData.select6 = select6;

    console.log(formData)
  },[cal1,cal2,cal3,cal4,select1,select2,select3,select4,select5,select6])

  useEffect(()=>{
    //formData.cal1 = cal1;
    console.log(formData)
  },[formData])
  useEffect(()=>{

  },[]);
  const save = (mode)=> {
    console.log("formData",formData);
    setMode(mode);
  }
  const handleChangeInput = (e ) => {

    const { name, value } = e.target;
    e.target.value = numberWithCommas(value)  ;
    setFormData({...formData,[name]:numberWithCommas(value)});
  }

  const   numberWithCommas =(x) =>{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }



  return (

      <Layout>

        <Content>
          <Title level={4} style={{textAlign:'center'}}>대출기본정보 {(mode === 'input' && ('입력'))}</Title>
          {(mode === 'input' && (
          <Form

              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              initialValues={{
                size: componentSize,
              }}
              onValuesChange={onFormLayoutChange}
              size={componentSize}
          >
            <Form.Item name='select1'   label="대출종류" id={'select1'}>
              <Select placeholder={'종류 선택'} onChange={handleChangeSelect1} defaultValue={formData.select1}>
                <Select.Option value="기본형">기본형</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="대출기간" name={'select2'}>
              <Select placeholder={'기간 선택'} onChange={handleChangeSelect2} name={'select2'} defaultValue={formData.select2}>
                <Select.Option value="120">120개월</Select.Option>
                <Select.Option value="240">240개월</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="최초대출금액" name={'input1'}>
              <Input placeholder={'원단위 금액을 입력해주세요.'} name={'input1'} value={formData.input1} onChange={handleChangeInput} defaultValue={formData.input1} />
            </Form.Item>
            <Form.Item label="최초만기일시상환금액" name={'input2'}>
              <Input placeholder={'원단위 금액을 입력해주세요.'} name={'input2'}  value={formData.input2} onChange={handleChangeInput} defaultValue={formData.input2} />
            </Form.Item>
            <Form.Item label="대출일자" name={'cal1'}>
              <DatePicker placeholder={'YYYY-MM-DD'} onChange={handleChangeCal1}  format="YYYY-MM-DD"  defaultValue={moment(formData.cal1, 'YYYY-MM-DD')} />
            </Form.Item>
            <Form.Item label="대출만기" name={'cal2'}>
              <DatePicker placeholder={'YYYY-MM-DD'} onChange={handleChangeCal2}  format="YYYY-MM-DD"  defaultValue={moment(formData.cal2, 'YYYY-MM-DD')} />
            </Form.Item>
            <Form.Item label="취급기관"  name={'select3'}>
              <Select placeholder={'선택'} onChange={handleChangeSelect3}  defaultValue={formData.select3}>
                <Select.Option value="우리은행">우리은행</Select.Option>
                <Select.Option value="국민은행">국민은행</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="거치기간"  name={'select4'}>
              <Select placeholder={'기간 선택'} onChange={handleChangeSelect4}  defaultValue={formData.select4}>
                <Select.Option value="3">3개월</Select.Option>
                <Select.Option value="6">6개월</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="실행시점적용금리" name={'input3'}>
              <Input placeholder={'ex)2.80'} name={'input3'} onChange={handleChangeInput} />
            </Form.Item>
            <Form.Item label="고정금리전환일" name={'cal3'}>
              <DatePicker placeholder={'YYYY-MM-DD'}   onChange={handleChangeCal3} format="YYYY-MM-DD"/>
            </Form.Item>
            <Form.Item label="상환방법" name={'select5'}>
              <Select placeholder={' 선택'} onChange={handleChangeSelect5}>
                <Select.Option value="원리금균등상환">원리금균등상환</Select.Option>

              </Select>
            </Form.Item>
            <Form.Item label="경과개월수" name={'input4'}>
              <Input placeholder={'ex)17'} name={'input4'} onChange={handleChangeInput} />
            </Form.Item>
            <Form.Item label="현재적용금리" name={'input5'}>
              <Input placeholder={'ex)2.80'} name={'input5'} onChange={handleChangeInput} />
            </Form.Item>
            <Form.Item label="대출잔액" name={'input6'}>
              <Input placeholder={'원단위 금액을 입력해주세요.'} name={'input6'} onChange={handleChangeInput} />
            </Form.Item>
            <Form.Item label="잔여만기일시상환액" name={'input7'}>
              <Input placeholder={'원단위 금액을 입력해주세요.'} name={'input7'} onChange={handleChangeInput} />
            </Form.Item>
            <Form.Item label="채권상태" name={'select6'}>
              <Select placeholder={' 선택'} onChange={handleChangeSelect6}>
                <Select.Option value="정상">정상</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="다음회차납부일"  name={'cal4'}>
              <DatePicker placeholder={'YYYY-MM-DD'} onChange={handleChangeCal4} format="YYYY-MM-DD" />
            </Form.Item>
            <Form.Item style={{textAlign:'center'}}>
              <Button type="primary" onClick={()=>{setMode('view')}} >저장</Button>
            </Form.Item>
          </Form>
          ))}
          {
            (mode === 'view' && (
                <Col>
                  <Row>
                    <Col span={6} >
                      <Text strong>대출종류</Text>
                    </Col>
                    <Col span={18} >
                      <Text code>{formData.select1}</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6} >
                      <Text strong>대출기간</Text>
                    </Col>
                    <Col span={18} >
                      <Text code>{formData.select2}개월</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6} >
                      <Text strong>최초대출금액</Text>
                    </Col>
                    <Col span={18} >
                      <Text code>{formData.input1}원</Text>
                    </Col>
                  </Row>
                  <Row  align={'middle'} >
                    <Col span={6} >
                      <Text strong>최초만기일시상환금액</Text>
                    </Col>
                    <Col span={18} >
                      <Text code>{formData.input2}원</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6} >
                      <Text strong>대출일자</Text>
                    </Col>
                    <Col span={18} >
                      <Text code>{formData.cal1}</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6} >
                      <Text strong>대출만기</Text>
                    </Col>
                    <Col span={18} >
                      <Text code>{formData.cal2}</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6} >
                      <Text strong>취급기관</Text>
                    </Col>
                    <Col span={18} >
                      <Text code>{formData.select3}</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6} >
                      <Text strong>거치기간</Text>
                    </Col>
                    <Col span={18} >
                      <Text code>{formData.select4}개월</Text>
                    </Col>
                  </Row>
                  <Row  align={'middle'}>
                    <Col span={6} >
                      <Text strong>실행시점적용금리</Text>
                    </Col>
                    <Col span={18} >
                      <Text code>{formData.input3}</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6} >
                      <Text strong>고정금리전환일</Text>
                    </Col>
                    <Col span={18} >
                      <Text code>{formData.cal3}</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6} >
                      <Text strong>상환방법</Text>
                    </Col>
                    <Col span={18} >
                      <Text code>{formData.select5}</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6} >
                      <Text strong>경과개월수</Text>
                    </Col>
                    <Col span={18} >
                      <Text code>{formData.input4}개월</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6} >
                      <Text strong>현재적용금리</Text>
                    </Col>
                    <Col span={18} >
                      <Text code>{formData.input5}</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6} >
                      <Text strong>대출잔액</Text>
                    </Col>
                    <Col span={18} >
                      <Text code>{formData.input6}원</Text>
                    </Col>
                  </Row>
                  <Row  align={'middle'}>
                    <Col span={6} >
                      <Text strong>잔여만기일시상환액</Text>
                    </Col>
                    <Col span={18} >
                      <Text code>{formData.input7}원</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6} >
                      <Text strong>채권상태</Text>
                    </Col>
                    <Col span={18} >
                      <Text code>{formData.select6}</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6} >
                      <Text strong>다음회차납부일</Text>
                    </Col>
                    <Col span={18} >
                      <Text code>{formData.cal4}</Text>
                    </Col>
                  </Row>
                  <br />
                  <Row align={'middle'}  justify={'center'}>
                    <Col span={12} offset={6}>
                      <Button onClick={()=>{setMode('input')}}>입력하기</Button>
                    </Col>

                  </Row>
                </Col>

            ))
          }
        </Content>

      </Layout>

  );
}

export default App;
