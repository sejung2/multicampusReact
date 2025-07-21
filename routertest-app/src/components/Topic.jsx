import { useParams } from 'react-router-dom';

export default function Topic(props) {
  console.log(props.content);
  let content = props.content;
  const params = useParams();
  console.log('params', params);
  let topic_id = params.topics_id;
  // topic_id에 해당하는 데이터를 content에서 찾는 작업을 진행
  // topic_id에 해당한느 데이터가 없으면 기본값으로 출력
  let seleted_topic = {
    title: 'Sorry',
    description: 'Not Found',
  };

  for (let i = 0; i < content.length; i++) {
    if (content[i].id === Number(topic_id)) {
      seleted_topic = content[i];
      break;
    }
  }
  return (
    <div>
      <h3>{seleted_topic.title}</h3>
      <p>{seleted_topic.description}</p>
    </div>
  );
}
