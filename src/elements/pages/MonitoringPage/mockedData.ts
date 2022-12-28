import { faker } from '@faker-js/faker';

export const mockedData = (currTable: string) => {
  const rows: any[] = [];

  if (currTable === 'inbox') {
    const randSize = faker.datatype.number({ min: 10, max: 150 });

    for (let i = 0; i < randSize; i++) {
      const randMonth = faker.datatype.number({ min: 1, max: 12 });
      const randDay = faker.datatype.number({ min: 1, max: 30 });
      const randYear = faker.datatype.number({ min: 1990, max: 2022 });
      const randHour = faker.datatype.number({ min: 0, max: 23 });
      const randMin = faker.datatype.number({ min: 10, max: 60 });
      const randTimestamp = `${randDay}/${randMonth}/${randYear} ${randHour}:${randMin}:${randMin}`;
      const randTitle = faker.random.word();
      rows.push({
        status: faker.helpers.arrayElement([
          'sent',
          'waiting',
          'missing',
          'resolved',
          'read',
          'created',
          'modified',
        ]),
        ID: faker.random.numeric(6),
        filename: `${randTitle}.${faker.helpers.arrayElement(['xml', 'pptx'])}`,
        pages: faker.datatype.number({ min: 10, max: 20 }),
        words: faker.datatype.number({ min: 10, max: 200 }),
        created: randTimestamp,
        layout: faker.helpers.arrayElement(['Portrait', 'Landscape']),
        modified: randTimestamp,
        filesize: faker.datatype.number({ min: 10, max: 200 }) + 'KB',
        subject: faker.helpers.arrayElement(['Release notes', 'Meeting', 'Invoice', 'Order']),
      });
    }
  } else if (currTable === 'vessel') {
    const randSize = faker.datatype.number({ min: 100, max: 1500 });

    for (let i = 0; i < randSize; i++) {
      const randMonth = faker.datatype.number({ min: 1, max: 12 });
      const randDay = faker.datatype.number({ min: 1, max: 30 });
      const randYear = faker.datatype.number({ min: 1990, max: 2022 });
      rows.push({
        status: faker.helpers.arrayElement(['in transit', 'waiting', 'missing', 'arrived']),
        ID: faker.random.numeric(6),
        number: faker.random.alphaNumeric(5).toUpperCase(),
        direction: faker.helpers.arrayElement(['Import', 'Export']),
        ship: faker.random.words(2),
        date: `${randDay}/${randMonth}/${randYear}`,
        bookings: faker.datatype.number({ min: 10, max: 20 }),
      });
    }
  }

  return rows;
};
