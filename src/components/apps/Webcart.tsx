import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useEffect, useRef } from 'react';
import { CartPole } from 'webcart';
import type { Mesh } from 'three';

function Cart() {
  const cartRef = useRef<CartPole>(null);
  const meshRef = useRef<Mesh>(null);

  useEffect(() => {
    cartRef.current = CartPole.new();

    let cart = cartRef.current;
    if (cart == null) {
      return;
    }

    cart.pos = 0.0;
    cart.vel = 0.0;
    cart.theta = 0.5;
    cart.omega = 0.0;
    cart.gravity = 9.81;
    cart.length = 1.0;
    cart.tip_mass = 0.1;
    cart.cart_mass = 1.0;

    return () => {
      if (cartRef.current) {
        cartRef.current.free();
      }
    };
  }, []);

  useFrame((_, delta) => {
    let cart = cartRef.current;

    if (cart == null || meshRef.current == null) {
      return;
    }

    cart.update(delta);

    meshRef.current.position.x = cart.pos;
    meshRef.current.rotation.z = cart.theta;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}

export default function Webcart() {
  return (
    <div className='flex flex-col w-full h-full '>
      <Canvas>
        <Cart />

        <OrbitControls />
      </Canvas>
    </div>
  );
}
