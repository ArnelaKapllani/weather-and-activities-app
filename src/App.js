import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import Form from "./components/form/Form.js";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    newActivity = { ...newActivity, id: uid() };
    setActivities([newActivity, ...activities]);
  }

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
