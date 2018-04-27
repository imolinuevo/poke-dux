import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagPokemonListComponent } from './bag-pokemon-list.component';

describe('BagPokemonListComponent', () => {
  let component: BagPokemonListComponent;
  let fixture: ComponentFixture<BagPokemonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagPokemonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagPokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
