import React from "react";
import { Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import Family from "./Акацки.jpg";

function MiddleContent() {
  return (
    <>
      <Timeline mode="alternate">
        <Timeline.Item color="green">
          Привет, ты на первой странице, созданной таким же как и ты, учеником
        </Timeline.Item>
        <Timeline.Item color="green">
          Когда я пришел учиться, я много сомневался в себе, были сложные темы
          которые я не понимал,
          <br />И конечно же, что-то я до сих пор не усвоил
        </Timeline.Item>
        {/* <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
      beatae vitae dicta sunt explicabo.
    </Timeline.Item> */}
        <Timeline.Item color="green">
          Каждый раз, когда мне становилось что-то не понятно, я просто
          спрашивал это у Паши,
          <br />И Он всегда объяснял мне, что бы я не спросил, он всегда пытался
          донести до меня суть
          <br />
          Что угодно, любую глупость
        </Timeline.Item>
        {/* <Timeline.Item>Create a services site 2015-09-01</Timeline.Item> */}
        <Timeline.Item
          dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
        >
          Шло время, я обучался, спрашивал и интересовался сам, очень много тебе
          придется работать самому
          <br />
          По-другому не бывает, чтобы достичь по-настоящему чего-то стоящего,
          нужно очень много работать
        </Timeline.Item>
        <Timeline.Item color="red">
          Бывали моменты, когда казалось что ничего не выйдет, когда я был готов
          сдаться,
          <br />
          Но Паша всегда был рядом, главным было просто не останавливаться и
          идти дальше
        </Timeline.Item>
        <Timeline.Item color="green">
          Теперь я богат и успешен, стал Хокаге и спас Коноху
          <br />
        </Timeline.Item>
        <Timeline.Item color="yellow">
          Главное дойти до конца, как бы не было тяжело
          <br />
        </Timeline.Item>
      </Timeline>
      <div className="logo-redev">
        <img src={Family} alt="ReDev-family" />
      </div>
    </>
  );
}

export default MiddleContent;
