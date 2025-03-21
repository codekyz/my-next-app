import { Button } from '../components/ui/button';

export default function Home() {
  return (
    <main>
      <Button variant="outline" className="bg-blue-900">
        Click me
      </Button>
      <button className="bg-blue-500 text-white p-2 rounded-md">
        클릭좀해주세요
      </button>
    </main>
  );
}
