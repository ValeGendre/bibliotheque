import { Controller, Get } from '@nestjs/common';

interface BookInfo {
    bookname: string;
    author: string;
    uuid: number;
}

interface BookList {
    books: BookInfo[];
}

@Controller('books')
export class BooksController {

    defaultBookList: BookList = {
        books: [
            {
                bookname: 'Clean Code',
                author: 'Unknown',
                uuid: 101,
            },
            {
                bookname: 'Clean Architecture',
                author: 'Unknown',
                uuid: 10,
            },
        ]
    }

    @Get()
    findAll(): BookList {
        return this.defaultBookList
    }
}
