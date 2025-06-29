import OpengraphImage from '../../../components/opengraph-image';

export const runtime = 'edge';

export default async function Image({ params }: { params: Promise<{ lang: 'en' | 'de' }> }) {
  const { lang } = await params;
  const title = lang === 'de' 
    ? 'TADM Nutrition - Premium Gehirn-Gesundheit Nahrungsergänzungsmittel'
    : 'TADM Nutrition - Premium Brain Health Supplements';

  return await OpengraphImage({ title });
}