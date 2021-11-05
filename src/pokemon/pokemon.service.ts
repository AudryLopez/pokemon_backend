import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Pokemon } from './entities/pokemon.entity';
import { map, Observable } from 'rxjs';

@Injectable()
export class PokemonService {
  constructor(private httpService: HttpService) {}

  create(createPokemonDto: CreatePokemonDto) {
    return 'This action adds a new pokemon';
  }

  findAll(): Observable<AxiosResponse<Pokemon[]>> {
    return this.httpService
      .get(`https://pokeapi.co/api/v2/pokemon/?&limit=151`)
      .pipe(map((res) => res.data));
  }

  findOne(id: number): Observable<AxiosResponse<Pokemon[]>> {
    return this.httpService
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .pipe(map((res) => res.data));
  }
  
  findpokemon(pokemon: string): Observable<AxiosResponse<Pokemon[]>> {
    return this.httpService
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .pipe(map((res) => res.data));
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes 
    a #${id} pokemon`;
  }
}
