import { Card, CardHeader, CardTitle, CardDescription, }
from "../components/ui/card/card"
import Test from "../components/Test/Test"

interface VaccinationStatus {
  rabies: boolean;
  distemper: boolean;
  felineLeukemia: boolean;
}

interface CatOwner {
  name: string;
  contact: string;
  address: string;
}

interface CatProfile {
  catProfile: {
    name: string;
    id: number;
    age: number;
    breed: string;
    color: string;
    weight: number;
    gender: string;
    personality: string[];
    vaccinations: VaccinationStatus;
    owner: CatOwner
    images: string[];
  };
}

export default async function Home() {

 return (
   <main>
     <Test />
   </main>
 );
}


