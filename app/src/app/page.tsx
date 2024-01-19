import { Card, CardHeader, CardTitle, CardDescription, }
from "../components/ui/card"

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
    owner: CatOwner;
    images: string[];
  };
}

async function getCatProfile(): Promise<CatProfile[]> {
  const result = await fetch('http://localhost:4000/cats')
  return result.json();
}

export default async function Home() {
  const cats = await getCatProfile();
  console.log(cats);

 return (
   <main>
     {cats.map((cat) => (
       <Card key={cat.catProfile.id}>
         <CardHeader>
           <div>
             <CardTitle>{cat.catProfile.name}</CardTitle>
             <CardDescription>
               {cat.catProfile.color}{' '}{cat.catProfile.gender}{" "}
               {cat.catProfile.breed}
             </CardDescription>
           </div>
         </CardHeader>
       </Card>
     ))}
   </main>
 );
}
