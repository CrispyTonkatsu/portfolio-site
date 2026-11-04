import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useEffect, useRef } from 'react';
import { CartPole } from 'webcart';

export default function Webcart() {
  const cart = useRef<CartPole | null>(null)

  useEffect(() => {
    cart.current = CartPole.new()

    return () => {
      cart.current.free()
    };
  }, []);

  return (
    <div className='w-full h-full'>
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>

        <OrbitControls />
      </Canvas>
    </div>
  );
}
