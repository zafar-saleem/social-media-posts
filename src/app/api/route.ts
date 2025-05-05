import { type NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, perferendis quos facere minima pariatur sapiente ea molestias? Maiores, sit dolorem inventore odio quo mollitia debitis nostrum magnam, deserunt id adipisci!",
    date: new Date(),
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, perferendis quos facere minima pariatur sapiente ea molestias? Maiores, sit dolorem inventore odio quo mollitia debitis nostrum magnam, deserunt id adipisci!",
    date: new Date(),
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, perferendis quos facere minima pariatur sapiente ea molestias? Maiores, sit dolorem inventore odio quo mollitia debitis nostrum magnam, deserunt id adipisci!",
    date: new Date(),
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, perferendis quos facere minima pariatur sapiente ea molestias? Maiores, sit dolorem inventore odio quo mollitia debitis nostrum magnam, deserunt id adipisci!",
    date: new Date(),
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, perferendis quos facere minima pariatur sapiente ea molestias? Maiores, sit dolorem inventore odio quo mollitia debitis nostrum magnam, deserunt id adipisci!",
    date: new Date(),
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, perferendis quos facere minima pariatur sapiente ea molestias? Maiores, sit dolorem inventore odio quo mollitia debitis nostrum magnam, deserunt id adipisci!",
    date: new Date(),
  }
];

export async function GET(request: NextRequest, { params }: any) {
  const searchParams = request.nextUrl.searchParams;
  const messageParam = searchParams.get("message");

  return new NextResponse(
    JSON.stringify([...data]),
    { status: 200, headers: { 'content-type': 'application/json' } }
  );
}
