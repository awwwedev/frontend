import axiosInstance from "@/js/axiosInstance";
import {AxiosResponse} from "axios";
import newsImage from '@/assets/img/town.png'

class News {
    img: string;
    title: string;
    text: string;
    createdAt?: string;

    constructor(img:string, title:string, text:string, createdAt?: string) {
        this.img = img;
        this.title = title;
        this.text = text;
        this.createdAt = createdAt;
    }

    /* eslint-disable */
    static get(options?:any): Promise<AxiosResponse<News[]>> {
        return new Promise<AxiosResponse<News[]>>((resolve) => {
            resolve({
                data: [
                    new News(newsImage, 'Как правильно \n' +
                        'составить обращение \n' +
                        'к чиновнику', 'По данным регионального управления Росстата, граждане довольно активно обращаются в органы государственной власти, местного самоуправления и к их должностным лицам.\n' +
                        '\n' +
                        'Подавляющее большинство составляют обращения о нарушениях прав граждан в сферах трудового, жилищного законодательства, ЖКХ, здравоохранения, образования, по пенсионным вопросам, на нарушения земельного законодательства, прав малого и среднего бизнеса.'
                    ),
                    new News(newsImage, 'Как правильно \n' +
                        'составить обращение \n' +
                        'к чиновнику', 'По данным регионального управления Росстата, граждане довольно активно обращаются в органы государственной власти, местного самоуправления и к их должностным лицам.\n' +
                        '\n' +
                        'Подавляющее большинство составляют обращения о нарушениях прав граждан в сферах трудового, жилищного законодательства, ЖКХ, здравоохранения, образования, по пенсионным вопросам, на нарушения земельного законодательства, прав малого и среднего бизнеса.'
                    ),
                    new News(newsImage, 'Как правильно \n' +
                        'составить обращение \n' +
                        'к чиновнику', 'По данным регионального управления Росстата, граждане довольно активно обращаются в органы государственной власти, местного самоуправления и к их должностным лицам.\n' +
                        '\n' +
                        'Подавляющее большинство составляют обращения о нарушениях прав граждан в сферах трудового, жилищного законодательства, ЖКХ, здравоохранения, образования, по пенсионным вопросам, на нарушения земельного законодательства, прав малого и среднего бизнеса.'
                    )
                ]
                } as AxiosResponse<News[]>
            )
        })
    }
}

export default News