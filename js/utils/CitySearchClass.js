export class CitySearch {
        constructor(data) {
            this.id = `${CitySearch.length}-${data.city.name}`;
            this.city = data.city.name;
            this.weatherDays = [
                data.list[0],
                data.list[8],
                data.list[16],
                data.list[24],
                data.list[32]
            ];
        }
    }


    