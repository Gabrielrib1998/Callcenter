let todosRamais = [];
let ramaisFiltrados = [];

function carregarRamais() {
    $.ajax({
        url: "lib/ramais.php",
        type: "GET",
        dataType: "json",
        success: function(data) {
            todosRamais = Object.values(data);
            ramaisFiltrados = todosRamais;
            atualizarEstatisticas();
            renderizarCartoes();
        },
        error: function(xhr, status, error) {
            console.log("Erro ao carregar dados:", error, status, xhr.responseText);
            $('#cartoes').html(`
                <div class="no-results">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Erro ao carregar os ramais. Tente novamente.</p>
                </div>
            `);
            
        }
    });
}

function renderizarCartoes() {
    $('#cartoes').empty();
    
    if (ramaisFiltrados.length === 0) {
        $('#cartoes').html(`
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>Nenhum ramal encontrado com os filtros aplicados.</p>
            </div>
        `);
        return;
    }
    
    ramaisFiltrados.forEach(function(ramal) {
        let statusClass = ramal.status === 'UNKNOWN' ? 'offline' :
                         ramal.status === 'available' ? 'disponivel' :
                         ramal.status === 'in use' ? 'ocupado' :
                         ramal.status === 'ring' ? 'chamando' :
                         ramal.status === 'paused' ? 'pausado' : ramal.status.toLowerCase();
        let statusLabel = ramal.status === 'UNKNOWN' ? 'Offline' :
                         ramal.status === 'available' ? 'Disponível' :
                         ramal.status === 'in use' ? 'Ocupado' :
                         ramal.status === 'ring' ? 'Chamando' :
                         ramal.status === 'paused' ? 'Pausado' : ramal.status;
        
        let cartaoHtml = `
            <div class="cartao 
                ${ramal.status == 'UNKNOWN' ? 'background-offline' : ''}">
                <div class="cartao-nome">${ramal.nome}</div>
                <div class="cartao-ramal">
                    <i class="fas fa-phone"></i>
                    ${ramal.numeroramal}
                </div>
                <span class="cartao-status status-${statusClass}">${statusLabel}</span>
                <span class="${statusClass} icone-posicao"></span>
            </div>
        `;
        $('#cartoes').append(cartaoHtml);
    });
}


function atualizarEstatisticas() {
    let total = todosRamais.length;
    let disponivel = todosRamais.filter(r => r.status === 'available').length;
    let ocupado = todosRamais.filter(r => r.status === 'in use').length;
    let pausado = todosRamais.filter(r => r.status === 'paused').length;
    let offline = todosRamais.filter(r => r.status === 'UNKNOWN').length;
    let chamando = todosRamais.filter(r => r.status === 'ring').length;
    
    $('#totalRamais').text(total);
    $('#totalDisponivel').text(disponivel);
    $('#totalOcupado').text(ocupado);
    $('#totalPausado').text(pausado);
    $('#totalOffline').text(offline);
    $('#totalChamando').text(chamando);
}


function aplicarFiltros() {
    let searchTerm = $('#searchInput').val().toLowerCase().trim();
    let statusFilter = $('#statusFilter').val().toLowerCase();

    ramaisFiltrados = todosRamais.filter(function(ramal) {
        let nome = (ramal.nome || '').toString().toLowerCase();
        let numero = (ramal.numeroramal || '').toString();
        let status = (ramal.status || '').toString().toLowerCase();
        
        let matchSearch = true;
        if (searchTerm.length > 0) {
            matchSearch = nome.includes(searchTerm) || numero.includes(searchTerm);
        }

        let matchStatus = (statusFilter === 'todos') ? true : (status === statusFilter);

        return matchSearch && matchStatus;
    });

    renderizarCartoes();
}

$(document).ready(function() {
    $('#searchInput').on('keyup', function() {
        aplicarFiltros();
    });

    $('#statusFilter').on('change', function() {
        aplicarFiltros();
    });

    carregarRamais();

    setInterval(carregarRamais, 10000);
});