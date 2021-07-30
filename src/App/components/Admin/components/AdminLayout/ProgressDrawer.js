import {
  Divider,
  Drawer,
  Progress,
  Row,
  Timeline,
  Typography,
  Statistic,
  Col,
} from 'antd';
import moment from 'moment';
const { Title, Paragraph, Text } = Typography;
const ProgressDrawer = ({ visible, setVisible, dataForDrawer }) => {
  const { firstName, lastName, progress, dateStart } = dataForDrawer;
  console.log(moment.now())
  const result = moment(moment.now()).diff(moment(dateStart), 'days');
  return (
    <Drawer
      width={'50%'}
      title={`${firstName} ${lastName}`}
      placement='right'
      closable={false}
      onClose={() => setVisible(false)}
      visible={visible}
    >
      <Title level={2}>Прогресс</Title>
      <Row justify={'center'}>
        <Progress
          percent={
            progress &&
            (
              (progress.filter(({ status }) => status).length /
                progress.length) *
              100
            ).toFixed(2)
          }
          steps={progress && progress.length}
        />
      </Row>
      <Divider />
      <Row gutter={16}>
        <Col offset={4} span={6}>
          <Statistic title='Колличество дней' value={result} />
        </Col>
        <Col span={6}>
          <Statistic title='Задачи' value={34} suffix='/ 50' />
        </Col>
        <Col span={6}>
          <Statistic title='Чек-лист' value={3} suffix='/ 5' />
        </Col>
      </Row>
      <Divider />

      <Title level={2}>Шаги</Title>
      <Timeline mode='alternate'>
        {progress &&
          progress.map(({ title, status }, index) => (
            <Timeline.Item key={index} color={status ? 'green' : 'gray'}>
              {title}
            </Timeline.Item>
          ))}
      </Timeline>
    </Drawer>
  );
};

export default ProgressDrawer;
