import {
  TrendingUp,
  Goal,
  SquareCheckBig,
  AlarmClockCheck,
  Flame,
} from "lucide-react";

import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const listItem = [
  {
    title: "Goals",
    icon: Goal,
    value: "20",
    change: "+5%",
  },
  {
    title: "Completed Goals",
    icon: SquareCheckBig,
    value: "20",
    change: "+5%",
  },
  {
    title: "Total Learning Time",
    icon: AlarmClockCheck,
    value: "20h",
    change: "+5%",
  },
  {
    title: "Learning Streak",
    icon: Flame,
    value: "20 days",
    change: "+5%",
  },
];

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="flex items-stretch flex-wrap -mx-2 gap-y-2">
        {listItem.map((item, index) => (
          <div key={index} className="px-2 w-1/4">
            <Card key={index} className="w-full">
              <CardHeader>
                <CardDescription>
                  <div className="flex items-center">
                    <item.icon className="mr-2" />
                    {item.title}
                  </div>
                </CardDescription>
                <CardTitle className="text-2xl font-semibold">
                  {item.value}
                </CardTitle>
                <CardAction>
                  <Badge variant="outline">
                    <TrendingUp className="mr-2" />
                    {item.change}
                  </Badge>
                </CardAction>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
