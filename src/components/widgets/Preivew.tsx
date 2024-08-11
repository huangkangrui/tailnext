import Link from 'next/link';
import { TestimonialsProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import CTA from '../common/CTA';
import ItemTestimonial from '../common/ItemTestimonial';
import Image from 'next/image';
import preview from '~/database/preview';
const Previews = ({

  id,
  hasBackground = false,
}: TestimonialsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={true} containerClass="">
    {<Headline header={{title: '模特预览'}} titleClass="text-2xl sm:text-3xl" />}
    <div className="flex items-stretch justify-center">
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3">
      {preview.map(({ id, title, url }) => (
          <div key={id} className="flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-lg">
            <Link href={`/${id}`}>
              <Image width={650} height={340} className=' object-cover h-96' alt={title} src={url} />
              <h2 className="p-4 font-bold">{title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </WidgetWrapper>
);

export default Previews;
