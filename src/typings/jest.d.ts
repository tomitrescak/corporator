declare namespace jest {
  import { ReactTestRenderer } from 'react-test-renderer';

  interface It {
    /**
     * Creates a test closure.
     *
     * @param name The name of your test
     * @param fn The function for your test
     * @param timeout The timeout for an async function test
     */
    (
      name: string,
      impl: Function,
      fn: (component: ReactTestRenderer) => any,
      timeout?: number
    ): void;
    (name: string, fn: ProvidesCallback, timeout?: number): void;
  }
}
