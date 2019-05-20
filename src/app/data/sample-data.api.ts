import { InMemoryDbService } from 'angular-in-memory-web-api';
import { SampleData } from './sample-data.model';


export class SampleDataApi implements InMemoryDbService {
  createDb() {
    // tslint:disable-next-line:prefer-const
    let sampleData: SampleData[] = [
      {
        id: 1,
        first_name: 'Julieta',
        last_name: 'Wadworth',
        email: 'jwadworth0@un.org',
        gender: 'Female',
        company: 'Bubbletube'
      },
      {
        id: 2,
        first_name: 'Stavro',
        last_name: 'Allner',
        email: 'sallner1@sfgate.com',
        gender: 'Male',
        company: 'Shufflebeat'
      },
      {
        id: 3,
        first_name: 'Carlen',
        last_name: 'Josupeit',
        email: 'cjosupeit2@so-net.ne.jp',
        gender: 'Female',
        company: 'Roombo'
      },
      {
        id: 4,
        first_name: 'Jonathon',
        last_name: 'Sarver',
        email: 'jsarver3@tmall.com',
        gender: 'Male',
        company: 'Quimba'
      },
      {
        id: 5,
        first_name: 'Juliet',
        last_name: 'Antoniutti',
        email: 'jantoniutti4@google.co.uk',
        gender: 'Female',
        company: 'Oyonder'
      },
      {
        id: 6,
        first_name: 'Caria',
        last_name: 'Redmond',
        email: 'credmond5@altervista.org',
        gender: 'Female',
        company: 'Edgeclub'
      },
      {
        id: 7,
        first_name: 'Finley',
        last_name: 'Reeves',
        email: 'freeves6@nsw.gov.au',
        gender: 'Male',
        company: 'Wordify'
      },
      {
        id: 8,
        first_name: 'Mord',
        last_name: 'Dax',
        email: 'mdax7@about.com',
        gender: 'Male',
        company: 'Zoovu'
      },
      {
        id: 9,
        first_name: 'Caye',
        last_name: 'Livingston',
        email: 'clivingston8@sina.com.cn',
        gender: 'Female',
        company: 'Flipstorm'
      },
      {
        id: 10,
        first_name: 'Thom',
        last_name: 'Minghetti',
        email: 'tminghetti9@networksolutions.com',
        gender: 'Male',
        company: 'Tagfeed'
      },
      {
        id: 11,
        first_name: 'Emmett',
        last_name: 'Staining',
        email: 'estaininga@miibeian.gov.cn',
        gender: 'Male',
        company: 'Edgeclub'
      },
      {
        id: 12,
        first_name: 'Hi',
        last_name: 'Jephcote',
        email: 'hjephcoteb@edublogs.org',
        gender: 'Male',
        company: 'Linkbuzz'
      },
      {
        id: 13,
        first_name: 'Edd',
        last_name: 'Pealing',
        email: 'epealingc@linkedin.com',
        gender: 'Male',
        company: 'Avaveo'
      },
      {
        id: 14,
        first_name: 'Larine',
        last_name: 'Menaul',
        email: 'lmenauld@mtv.com',
        gender: 'Female',
        company: 'Eamia'
      },
      {
        id: 15,
        first_name: 'Chadwick',
        last_name: 'Rawe',
        email: 'crawee@scientificamerican.com',
        gender: 'Male',
        company: 'Ainyx'
      },
      {
        id: 16,
        first_name: 'Kippy',
        last_name: 'Fishbourn',
        email: 'kfishbournf@unc.edu',
        gender: 'Male',
        company: 'Dynazzy'
      },
      {
        id: 17,
        first_name: 'Harwell',
        last_name: 'Eyer',
        email: 'heyerg@youku.com',
        gender: 'Male',
        company: 'Aimbo'
      },
      {
        id: 18,
        first_name: 'Thorny',
        last_name: 'Byne',
        email: 'tbyneh@omniture.com',
        gender: 'Male',
        company: 'Mycat'
      },
      {
        id: 19,
        first_name: 'Gretchen',
        last_name: 'Reeme',
        email: 'greemei@yelp.com',
        gender: 'Female',
        company: 'Realfire'
      },
      {
        id: 20,
        first_name: 'Kristina',
        last_name: 'Maskrey',
        email: 'kmaskreyj@trellian.com',
        gender: 'Female',
        company: 'Jamia'
      }
    ];
    return {sampleData};
  }
}
