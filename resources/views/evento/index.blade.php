@extends('layouts.app')
@section('content')
    <div class="container">
        <div id="agenda"></div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="evento" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Agenda</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formEvento" action="">

                        {!! csrf_field() !!}

                        <div class="form-floating mb-3 d-none">
                            <input type="text" class="form-control" id="id" name="id"
                                placeholder="Id del evento">
                            <label for="id">Id</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="title" name="title"
                                placeholder="Escribe el titulo del evento">
                            <label for="title">Titulo del evento</label>
                        </div>

                        <div class="form-floating mb-3">
                            <textarea class="form-control" name="descripcion" id="descripcion" placeholder="Descripción del evento" id="description"
                                style="height: 100px"></textarea>
                            <label for="descripcion">Descripción</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="date" class="form-control" name="start" id="start"
                                placeholder="Fecha inicial">
                            <label for="start">Fecha inicial</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="date" class="form-control" name="end" id="end"
                                placeholder="Fecha final">
                            <label for="end">Fecha final</label>
                        </div>

                    </form>
                </div>
                <div class="modal-footer">

                    <button type="button" class="btn btn-success" id="btnGuardar">Guardar</button>
                    <button type="button" class="btn btn-warning" id="btnModificar">Modificar</button>
                    <button type="button" class="btn btn-danger" id="btnEliminar">Eliminar</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                </div>
            </div>
        </div>
    </div>
@endsection
