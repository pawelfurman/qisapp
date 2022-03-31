import { SetTableStore } from '../../store/set-table.store';

describe('SetTableStore', () => {
  const componentStore = new SetTableStore();

  it('should be created', () => {
    expect(componentStore).toBeTruthy();
  });
});
