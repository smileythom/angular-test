
export class InMemoryDataService {
  createDb() {
    let heroes = [
  { "id": 11, "name": "Kelly Simonson", "quote":"Let's build another flowchart!" },
  { "id": 12, "name": "Tom Stieger", "quote":"It should be easy!" },
  { "id": 13, "name": "Adrian Hongo", "quote":"" },
  { "id": 14, "name": "Brett Keegan", "quote":"" },
  { "id": 15, "name": "Bobby Basnett", "quote":"" },
  { "id": 16, "name": "Anthony Wilson", "quote":"" },
  { "id": 17, "name": "Jory Hoffman", "quote":"" },
  { "id": 18, "name": "Shaya Goldberg", "quote":"" },
  { "id": 19, "name": "abas ERP", "quote":"" }
    ];
    return {heroes};
  }
}
