'use client';
import Orb from '@/components/Orb';

export default function HomePage() {
  return (
    <div style={{ width: '1080px', height: '1080px', position: 'relative' }}>
      <Orb hue={0} hoverIntensity={0} rotateOnHover forceHoverState={false} />
    </div>
  );
}
